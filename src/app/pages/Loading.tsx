import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../components/ui/empty"
import { Spinner } from "../components/ui/spinner"

export default function Loading() {
  return (
    <main className="bg-(--secondary-color)">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner />
          </EmptyMedia>
          <EmptyTitle>Processing your request</EmptyTitle>
          <EmptyDescription>
            Please wait while we load you to your page.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </main>
  )
}
