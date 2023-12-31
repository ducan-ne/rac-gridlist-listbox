import { Button, ListBox, ListBoxItem, Text } from "react-aria-components";
import { Delete, DeleteIcon, RecycleIcon, Trash } from "lucide-react";

function ContactListExample() {
  // optional: sử dụng `useAsyncList` để load data từ API, 1 phiên bản gọn nhẹ hơn của `react-query`, đọc thêm tại docs
  // let list = useAsyncList<Character>({
  //   async load({ signal, cursor }) {
  //     if (cursor) {
  //       cursor = cursor.replace(/^http:\/\//i, 'https://');
  //     }
  //
  //     let res = await fetch(
  //       cursor || `https://swapi.py4e.com/api/people/?search=`,
  //       { signal }
  //     );
  //     let json = await res.json();
  //
  //     return {
  //       items: json.results,
  //       cursor: json.next
  //     };
  //   }
  // });

  return (
    <ListBox
      aria-label="Contacts"
      // cung cấp các props `selectionMode` và `selectionBehavior` để xác định cách chọn item
      selectionMode="multiple"
      selectionBehavior="replace"
      className="w-72 max-h-[290px] overflow-auto outline-none bg-white text-gray-700 p-2 flex flex-col gap-2 rounded-lg shadow scroll-pt-6"
      renderEmptyState={() => {
        // hiển thị khi không có item nào hoặc loading
      }}
      // items={list.items} // sử dụng `useAsyncList` thì dùng `list.items`
      items={Array.from(
        {
          length: 10,
        },
        (_, i) =>
          ({
            id: i,
            name: `Contact ${i + 1}`,
            avatar: `https://picsum.photos/seed/${i}/64/64`,
          }) as const,
      )}
    >
      {(item) => <Contact key={item.id} item={item} />}
    </ListBox>
  );
}

function Contact({ item }) {
  return (
    <ListBoxItem
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
        <span className="font-semibold truncate">{item.name}</span>
      </div>
    </ListBoxItem>
  );
}

export default ContactListExample;
