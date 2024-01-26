import { useState } from 'react'
import * as S from './filterButton.styles'

export default function FilterCategory({
  title,
  content,
  setFilter,
  activeFilter,
  selected,
}) {
  const [active, setActive] = useState(false)
  const toggleVisibility = () => setActive(!active)
  return (
    <S.filterCategory>
      <S.filterButton
        type="button"
        $active={title !== 'умолчанию'}
        onClick={toggleVisibility}
      >
        {title}
      </S.filterButton>
      {selected > 0 && (
        <S.selectedFilterItems>{selected}</S.selectedFilterItems>
      )}
      {active && (
        <S.filterPopup className="menu">
          <S.filterList>
            {content.map((item) => (
              <S.filterItem
                key={item?.title}
                onClick={() => {
                  setFilter(item)
                  setActive(false)
                }}
                $isSelected={activeFilter === item?.title}
              >
                {item?.title}
              </S.filterItem>
            ))}
          </S.filterList>
        </S.filterPopup>
      )}
    </S.filterCategory>
  )
}
