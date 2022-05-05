import Item from '../components/Item'

const items = [
  {
    "id": 1,
    "title": "Lufa", "desc": "Lufa is a simple, yet powerful, and beautiful way to create beautiful and unique websites."
  },
  {
    "id": 2,
    "title" : "Supra", "desc": "Supra is a simple, yet powerful, and beautiful way to create beautiful and unique websites."
  },
  {
    "id": 3,
    "title" : "Apple", "desc": "Apple is a simple, yet powerful, and beautiful way to create beautiful and unique websites."
  },
  {
    "id": 4,
    "title" : "Zoom", "desc": "Zoom is a simple, yet powerful, and beautiful way to create beautiful and unique websites."
  }
]

export default function Shop() {
  return (
    <div className="container">
      <h2>Shop</h2>

      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
