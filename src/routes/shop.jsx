import Item from '../components/Item'

const items = [
  {
    "id": 1,
    "title": "G.I. Joe Figurine",
    "desc": "Ad qui fugiat sit ut duis qui dolore exercitation cillum."
  },
  {
    "id": 2,
    "title": "Toyota Supra",
    "desc": "Laborum exercitation amet et irure nisi. Reprehenderit eiusmod."
  },
  {
    "id": 4,
    "title": "Zoom Box",
    "desc": "Amet occaecat enim ipsum culpa nostrud minim ullamco quis nisi."
  },
  {
    "id": 3,
    "title": "Apple Slicer",
    "desc": "Velit esse tempor et non officia eiusmod velit aliqua."
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
