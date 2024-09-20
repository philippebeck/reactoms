import { ListProps } from "./ListProps"
import "./list.scss"

/**
 * ! LIST ATOM COMPONENT
 * @name List
 * @description Renders the List with an Items Array as an unordered list
 *
 * @param {ListProps} props
 *  The Properties of the List
 * 
 * @param {React.ReactElement[]|string[]} props.array
 *  The Array of items to render in the List
 *
 * @return {React.ReactElement<HTMLUListElement>}
 *  The rendered List
 */
export const List =
  ({ array }: ListProps):
  React.ReactElement<HTMLUListElement> => {

  return (
    <ul className="list">
      {array.map((item, index) => 
        <li key={index}>
          <>{item}</>
        </li>
      )}
    </ul>
  )
}
