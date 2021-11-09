import { useContext } from "react"

import { MovieGenrerContext } from "../contexts/MovieGenrer"

export function Header() {
  const {
    selectedGenre,
  } = useContext(MovieGenrerContext)

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}