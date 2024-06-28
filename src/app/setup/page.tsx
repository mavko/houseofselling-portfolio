import { Card } from '@/components/Card'
import { Section } from '@/components/Section'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Setup',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Setup() {
  return (
    <section className='pb-20'>
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, Intel Core i7, 16GB RAM (2017)">
            All these years later and it's still kicking. Can't say I'm not eyeing that M-series Macbooks, though...
          </Tool>
          <Tool title="Samsung UltraWide 49”">
            Complete immersion. Complete overkill. And used exlusively at the office.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            I'm sure there's plenty of really cool hipster premium keyboards out there but at the end of the day, it just works.
          </Tool>
          <Tool title="Apple Magic Mouse">
            Same as above, but also the macOS touch features are hard to beat.
          </Tool>
          <Tool title="Ikea Markus">
            Same old argument: gets the job done.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor.ai but eyeing Zed">
            Cursor having integreated AI feature that let's me cookup components and minor features in minutes is hard to beat.
            Zed however, is performant and minimal - gets out of the way completely. But, needs more maturity.
          </Tool>
          <Tool title="Warp Terminal">
            Making the AI feature describe errors for me as someone who spends minimal time on backend is golden.
          </Tool>
          <Tool title="Tailwindcss">
            Not an app or tool necessarily but it fundamentally changed my frontend work to where I now rarely feel like there isn't something I can cookup in css that I envision in my designs.
            So it deserves a mention just based on that.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Wasn't the easiest choice to let go of Sketch as I've used it since the early beta days, with its superior native performance, vector tooling etc - but as time goes on and I mostly work on branding and graphics for my projects, Figma fills my needs just fine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            I don't use even close to what this powerhouse of a tool gives you, but snippets and scripts right in the Spotlight search is increadible. Doesn't hurt the team behind it has a killer brand and design ;)
          </Tool>
          <Tool title="Linear">
            Document and execute on every single project in Linear today. I unironically use it as a source of inspiration for my projects, too. Much like Raycast, the Linear team has done a phenomenal job.
          </Tool>
          <Tool title="Discord">
            Not necessarily the best, but until something more streamlined comes along that doesn't break the bank - it is the go to communications app.
          </Tool>
          <Tool title="Cleanshot">
            Use it every single day, constantly, to share work or create marketing posts. Killer app, worth every penny.
          </Tool>
          <Tool title="Apple Notes">
            I've tried all kinds of notes app over the years but decided to simply stick to the native apple app. Gets the job done and I can easily invite my wife to document things together. Any serious ideas or projects later gets imported into Linear.
          </Tool>
        </ToolsSection>

      </div>
    </section>
  )
}
