import { useEffect, useState } from 'react';
import { Activity, Cpu, Database, Server, Zap, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

interface SystemMetric {
  label: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  icon: any;
  color: string;
}

interface ServiceStatus {
  name: string;
  status: 'online' | 'offline' | 'degraded';
  uptime: string;
  responseTime: number;
}

export const SystemMonitor = () => {
  const [metrics, setMetrics] = useState<SystemMetric[]>([]);
  const [services, setServices] = useState<ServiceStatus[]>([]);
  const [cpuHistory, setCpuHistory] = useState<number[]>(Array(20).fill(0));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    initializeMetrics();
    initializeServices();
    
    const metricsInterval = setInterval(updateMetrics, 2000);
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    
    return () => {
      clearInterval(metricsInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const initializeMetrics = () => {
    setMetrics([
      {
        label: 'CPU Usage',
        value: 42,
        unit: '%',
        status: 'healthy',
        icon: Cpu,
        color: 'text-blue-400',
      },
      {
        label: 'Memory',
        value: 68,
        unit: '%',
        status: 'healthy',
        icon: Database,
        color: 'text-purple-400',
      },
      {
        label: 'API Calls',
        value: 1247,
        unit: '/min',
        status: 'healthy',
        icon: Zap,
        color: 'text-yellow-400',
      },
      {
        label: 'Throughput',
        value: 2.4,
        unit: 'MB/s',
        status: 'healthy',
        icon: TrendingUp,
        color: 'text-green-400',
      },
    ]);
  };

  const initializeServices = () => {
    setServices([
      {
        name: 'API Gateway',
        status: 'online',
        uptime: '99.98%',
        responseTime: 45,
      },
      {
        name: 'Database Cluster',
        status: 'online',
        uptime: '99.99%',
        responseTime: 12,
      },
      {
        name: 'Redis Cache',
        status: 'online',
        uptime: '100%',
        responseTime: 3,
      },
      {
        name: 'Message Queue',
        status: 'online',
        uptime: '99.95%',
        responseTime: 8,
      },
    ]);
  };

  const updateMetrics = () => {
    setMetrics((prev) =>
      prev.map((metric) => {
        const variance = Math.random() * 10 - 5;
        let newValue = metric.value + variance;
        
        if (metric.label === 'CPU Usage') {
          newValue = Math.max(20, Math.min(85, newValue));
          setCpuHistory((prev) => [...prev.slice(1), newValue]);
        } else if (metric.label === 'Memory') {
          newValue = Math.max(50, Math.min(90, newValue));
        } else if (metric.label === 'API Calls') {
          newValue = Math.max(800, Math.min(2000, newValue));
        } else if (metric.label === 'Throughput') {
          newValue = Math.max(1, Math.min(5, newValue));
        }

        const status =
          newValue > 80 ? 'critical' : newValue > 60 ? 'warning' : 'healthy';

        return { ...metric, value: Math.round(newValue * 10) / 10, status };
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'border-green-500/30 bg-green-500/5';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/5';
      case 'critical':
        return 'border-red-500/30 bg-red-500/5';
      default:
        return 'border-gray-500/30 bg-gray-500/5';
    }
  };

  return (
    <Card className="bg-gray-950 border-gray-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Server className="w-5 h-5 text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-white">System Monitor</h3>
            <p className="text-xs text-gray-400">Real-time metrics dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
          <Activity className="w-4 h-4 text-green-400 animate-pulse" />
          <span>{time.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getMetricStatusColor(metric.status)} transition-all`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${metric.color}`} />
                <div className={`px-2 py-1 rounded text-xs font-mono ${
                  metric.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                  metric.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {metric.status}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
                <span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* CPU History Graph */}
      <div className="px-6 pb-6">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-white">CPU Usage History</span>
            <span className="text-xs text-gray-400 font-mono">Last 40s</span>
          </div>
          <div className="flex items-end gap-1 h-20">
            {cpuHistory.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t transition-all duration-300"
                style={{ height: `${value}%` }}
                title={`${value.toFixed(1)}%`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Status */}
      <div className="px-6 pb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Service Health</h4>
        <div className="space-y-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(service.status)} animate-pulse`} />
                <span className="text-sm text-white font-medium">{service.name}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                <span>Uptime: {service.uptime}</span>
                <span className="text-green-400">{service.responseTime}ms</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-900 border-t border-gray-800">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>All systems operational</span>
          <span className="font-mono">Region: US-EAST-1</span>
        </div>
      </div>
    </Card>
  );
};
