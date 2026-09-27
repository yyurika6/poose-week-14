
import BookCard from "./components/BookCard"

function App() {
  const books = [
    {
      id: 1,
      title: "嫌われる勇気",
      author: "岸見一郎・古賀史健",
      rating: 5,
      comment: "自分らしく生きることについて考えさせられる本です。",
    },
    {
      id: 2,
      title: "君の膵臓をたべたい",
      author: "住野よる",
      rating: 4,
      comment: "人との出会いや時間の大切さを感じられる作品です。",
    },
    {
      id: 3,
      title: "コンビニ人間",
      author: "村田沙耶香",
      rating: 4,
      comment: "普通とは何なのかについて考えさせられる本です。",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        私のおすすめ書籍
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            comment={book.comment}
          />
        ))}
      </div>
    </div>
  )
}

export default App