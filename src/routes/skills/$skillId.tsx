import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/$skillId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/skills/$skillId"!</div>
}
