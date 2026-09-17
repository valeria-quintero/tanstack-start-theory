import SkillCard from '#/components/SkillCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <ul className="mt-6 list-none p-0 space-y-5">
        <li>
          <SkillCard name="TanStack Start" />
        </li>
        <li>
          <SkillCard name="TypeScript" />
        </li>
        <li>
          <SkillCard name="MongoDB" />
        </li>
      </ul>
    </main> 
  )
}
