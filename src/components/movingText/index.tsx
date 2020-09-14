import React from 'react'

import * as S from './styles'

const MovingText:React.FC = () => {
    return(
        <S.Container>
            <section>
                    <S.Span times={1}> 7 DIAS CSS-</S.Span>
                    <S.Span times={2}>7 DIAS CSS-</S.Span>
                    <S.Span times={3}>7 DIAS CSS-</S.Span>
                    <S.Span times={4}>7 DIAS CSS-</S.Span>
                <div className="wrapper">
                    <S.Span times={1}> 7 DIAS CSS-</S.Span>
                    <S.Span times={2}>7 DIAS CSS-</S.Span>
                    <S.Span times={3}>7 DIAS CSS-</S.Span>
                    <S.Span times={4}>7 DIAS CSS-</S.Span>
                </div>
            </section>

        </S.Container>
    )
}

export default MovingText