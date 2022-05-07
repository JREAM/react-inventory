import Item from '../components/Item'
import { useParams } from "react-router-dom";

// Combine this JS/JSON or make api later
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

export default function ShopItem() {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div className="container">
      <h2>Shop Item</h2>
        <Item
          id={item.id}
          title={item.title}
          desc={item.desc}
          link={false}
      />
    </div>
  );
}
