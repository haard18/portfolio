import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { aboutConfig } from '@/config/About';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div className="min-h-screen">
      <Container className="py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Get to know me better
            </p>
          </div>

          <Separator />

          {/* Main Content */}
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Hello!</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm Haard, a passionate full-stack web developer with a knack for 
                  building modern web applications that merge Web3 and AI technology. I love 
                  crafting seamless user experiences and delving into the world of decentralized apps.
                </p>
                <p>
                  I specialize in full-stack web development, primarily using technologies like 
                  React, Node.js, TypeScript, and Tailwind CSS. I'm also deeply interested in 
                  blockchain development and the rapidly evolving world of decentralized applications.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {aboutConfig.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">What I Do</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Web3 & AI Integration</h3>
                  <p className="text-muted-foreground">
                    Merging Web3 with AI is one of my passions. I constantly explore new ways 
                    to integrate decentralized technologies with AI-driven solutions to create 
                    innovative and secure applications for the future.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Open Source</h3>
                  <p className="text-muted-foreground">
                    I actively contribute to open-source projects, helping the community and 
                    staying updated with the latest trends in the tech world. I love collaborating 
                    with other developers and sharing my knowledge.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Full Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building complete web applications from frontend to backend, with a focus 
                    on modern frameworks, responsive design, and optimal user experience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Beyond Coding</h3>
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me exploring new tech gadgets, playing sports, 
                    or enjoying a good meal while on a hike. Reading books is my favourite hobby while 
                    I can produce full-fledged music in FL Studio.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="rounded-lg border bg-muted/50 p-6 text-center">
              <p className="text-lg text-muted-foreground">
                Want to collaborate or just say hello? Feel free to{' '}
                <a 
                  href="https://x.com/solanki_haard" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-medium text-primary hover:underline"
                >
                  reach out on Twitter
                </a>{' '}
                or email me at{' '}
                <a 
                  href="mailto:haardsolanki.itm@gmail.com" 
                  className="font-medium text-primary hover:underline"
                >
                  haardsolanki.itm@gmail.com
                </a>
                !
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

