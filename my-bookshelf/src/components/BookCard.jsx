function BookCard({ title, author, rating, comment }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>

      <p className="text-gray-600 mt-2">
        著者：{author}
      </p>

      <p className="text-yellow-500 font-bold mt-2">
        ★ {rating}
      </p>

      <p className="text-gray-700 mt-4">
        {comment}
      </p>
    </div>
  )
}

export default BookCard