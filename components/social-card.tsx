import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Social } from '@/mocks/social'
import Link from 'next/link'

export function SocialCard(props: Social) {
  return (
    <Button
      variant="outline"
      className="flex h-fit items-center justify-start gap-5 p-4  2xl:h-48 2xl:w-48 2xl:flex-col 2xl:items-start 2xl:py-8"
      asChild
    >
      <Link href={props.socialLink} rel="noopener noreferrer" target="_blank">
        <Avatar className="flex h-10 w-10 flex-shrink-0 rounded-xl">
          {props.image && (
            <AvatarImage src={props.image} alt={props.altImage} />
          )}
          <AvatarFallback className="rounded-xl">
            {props.altImage}
          </AvatarFallback>
        </Avatar>
        <p className="2xl:h-20 2xl:w-full 2xl:text-wrap 2xl:text-left">
          {props.socialDescription}
        </p>
      </Link>
    </Button>
  )
}
