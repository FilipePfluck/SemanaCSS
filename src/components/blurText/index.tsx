import React from 'react'

import * as S from './styles'

const BlurText: React.FC = () => {
    return(
        <S.Container>
            <ul>
                <S.Char number={1}>7</S.Char>
                <S.Char number={2}>D</S.Char>
                <S.Char number={3}>I</S.Char>
                <S.Char number={4}>A</S.Char>
                <S.Char number={5}>S</S.Char>

                <S.Char number={6}>C</S.Char>
                <S.Char number={7}>S</S.Char>
                <S.Char number={8}>S</S.Char>
            </ul>
        </S.Container>
    )
}

export default BlurText