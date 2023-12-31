import { Button, GridList, GridListItem, Text } from 'react-aria-components'
import { DeleteIcon, Trash } from 'lucide-react'

function ContactListExample() {
  return (
    <GridList
      aria-label="Contacts"
      selectionMode="multiple"
      selectionBehavior="replace"
      className="w-72 max-h-[290px] overflow-auto outline-none bg-white text-gray-700 p-2 flex flex-col gap-2 rounded-lg shadow scroll-pt-6"
      items={Array.from({
        length: 10
      }, (_, i) => ({
        id: i,
        name: `Contact ${i + 1}`,
        avatar: `https://picsum.photos/seed/${i}/64/64`,
      } as const))}
    >
      {(item) => <Contact
        key={item.id}
        item={item}
      />}
    </GridList>
  )
}

function Contact({ item }) {
  return (
    <GridListItem
      id={item.id}
      textValue={item.name}
      // có thể dùng `href` hoặc không, khi sử dụng href, thì click vào item sẽ chuyển trang
      // href={`/contacts/${item.id}`}
      // khi item được chọn, thì sẽ có `aria-selected` | [data-selected=true] được thêm vào, selected:bg-blue-500 alias cho [data-selected=true]:bg-blue-500, cung cấp bởi plugin `tailwindcss-aria`
      className="group justify-around relative py-1 px-2 outline-none cursor-default flex gap-x-3 rounded selected:bg-blue-500 text-slate-700 selected:text-white"
    >
      <div className="flex flex-col">
        <img
          src={item.avatar}
          alt=""
          className="row-span-2 place-self-center h-8 w-8 rounded-full"
        />
        <span
          className="font-semibold truncate"
        >{item.name}</span>
      </div>
      {/* Hiển thị delete button khi chọn item bằng `group-aria-selected:opacity-100` */}
      <Button className="transition-opacity opacity-0 group-aria-selected:opacity-100 hover:text-red-700">
        <Trash />
      </Button>
    </GridListItem>
  )
}

export default ContactListExample
