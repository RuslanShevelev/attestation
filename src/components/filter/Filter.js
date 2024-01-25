import { useState } from 'react'
import FilterCategory from './FilterButton'
import * as S from './filter.styles'

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState('умолчанию')
  const [order, setOrder] = useState('по убыванию')

  return (
    <S.centerblockFilter>
      <S.filterTitle>Сортировка по:</S.filterTitle>
      <FilterCategory 
        title={selectedFilter}
        content={[
          'умолчанию',
          'количеству подписчиков',
          'количеству репозиториев',
          'дате присоединения',
        ]}
        activeFilter={selectedFilter}
        setFilter={setSelectedFilter}
      />
{selectedFilter !== 'умолчанию' &&      <FilterCategory
        title={order}
        content={['по убыванию', 'по возрастанию ']}
        activeFilter={order}
        setFilter={setOrder}
      />}
    </S.centerblockFilter>
  )
}
