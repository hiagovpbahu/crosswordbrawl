import { nanoid } from "nanoid"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
// import ThemeMenuButton from '~/components/themeMenuButton'
// import CreateRoomForm from '~/components/createRoomForm'
// import JoinRoomButton from '~/components/joinRoomButton'

export const dynamic = "force-dynamic"

export default function Home() {
  const roomId = nanoid()
  console.log("roomId", roomId)

  return (
    <div className="flex h-screen flex-col items-center justify-between pb-5 pt-[13vh]">
      {/* <ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' /> */}

      <Card className="w-[90vw] max-w-[400px]">
        <CardHeader>
          <CardTitle>Crossword Brawl</CardTitle>
          <CardDescription>
            A stop-like game for solving custom-created crosswords against your
            group of friends.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col space-y-4">
          {/* <CreateRoomForm roomId={roomId} /> */}

          <div className="flex items-center space-x-2 ">
            <Separator className="shrink" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="shrink" />
          </div>

          {/* <JoinRoomButton /> */}
        </CardContent>
      </Card>

      <div>
        <p className="text-sm text-muted-foreground">
          Crafted by{" "}
          <a
            href="https://www.linkedin.com/in/hiago-bah%C3%BA-662202186/"
            target="__blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Hiago Bahú
          </a>
          . The source code is on{" "}
          <a
            href="https://github.com/hiagovpbahu/crosswordbrawl"
            target="__blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
