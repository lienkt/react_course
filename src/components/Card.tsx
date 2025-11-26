import React from "react"

interface Book {
  title: string,
  description: string
}

interface CardProps {
  title: string,
  description: string,
  book: Book,
}

function Card({ title, description, book}: CardProps) {
  console.log('Card render---------', book)
  return (
    <div>
      Title: {title} <br />
      Description: {description} <br />
      Title Book: {book.title}
    </div>
  )
}
export default React.memo(Card);
// export default React.memo(Card, customEqual)

// function customEqual(prevProps: CardProps, nextProps: CardProps) {
//   console.log('customEqual: ', {
//     prevProps,
//     nextProps
//   })
//   return prevProps.book.title === nextProps.book.title
// }