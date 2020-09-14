import React from 'react'

import * as S from './styles'

const Loading: React.FC = () => {
    return(
        <S.Container>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </S.Container>
    )
}

export default Loading