import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export function AuthorSkills() {
  return (<Card>
    <CardHeader>
      <CardTitle>Skills & Technologies</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Domain knowledge</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>FinTech</li>
            <li>Stock Trading</li>
            <li>Financial Markets</li>
            <li>GameDev</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Backend</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>PHP</li>
            <li>Symfony</li>
            <li>PostgreSQL</li>
            <li>CI/CD</li>
            <li>High-load</li>
            <li>Zero Downtime</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Frontend</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Tools</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Terraform</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>);
}
