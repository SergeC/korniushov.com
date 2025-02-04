import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Full-stack developer passionate about building great web experiences
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I'm a full-stack developer with expertise in modern web technologies.
              I specialize in building scalable applications using React, Next.js,
              and Node.js. My passion lies in creating intuitive user interfaces
              and writing clean, maintainable code.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Backend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Tools</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}