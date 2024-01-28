import * as S from './pagelist.styles'
import ButtonSVG from '../buttonSVG/ButtonSVG'
import {createPages} from  '../../utils/pagescreator'

export const Pagination = ({ pagesCount, currentPage, setCurrentPage }) => {
  const pages = []
  createPages(pages, pagesCount, currentPage)

  return (
    <S.pagination>
      {currentPage > 1 && (
        <ButtonSVG name="prev" click={() => setCurrentPage(currentPage - 1)} />
      )}
      <S.pageList>
        {pages.map((item) => (
          <S.pageItem
            key={item === '...' ? Math.random() : item}
            $active={currentPage === item}
            onClick={() => {
              setCurrentPage(item)
            }}
            disabled={item === '...'}
          >
            {item}
          </S.pageItem>
        ))}
      </S.pageList>
      {currentPage !== pagesCount && (
          <ButtonSVG name="next" click={() => setCurrentPage(currentPage + 1)} />
      )}
    </S.pagination>
  )
}
