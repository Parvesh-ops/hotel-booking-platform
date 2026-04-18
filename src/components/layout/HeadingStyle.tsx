type HeadingStyleProps = {
  title: string
  style?: string
}

const HeadingStyle = ({ title, style = "" }: HeadingStyleProps) => {
  return (
    <>
      <h2
        className={`${style} text-lg md:text-xl font-bold text-center`}
      >
        {title}
      </h2>
    </>
  )
}

export default HeadingStyle