export type SectionLink = {
  title: string
  href: string
  color?: string
}

export type SectionProps = {
  title?: string
  link?: SectionLink
  slot?: React.ReactNode
  cardMode?: boolean
}

export type BtnLinkProps = {
  href: string
  title: string
  color?: string
}

export type BtnProps = {
  id?: string | number
  onPress?: () => void
  title: string
  color?: string
}

export type BtnGroupProps = {
  buttons: BtnProps[]
  onPress: (btn: BtnProps) => void
  color: string
  selectedId: string | number | undefined
}