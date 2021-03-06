import styled from 'styled-components';
import Header from '../components/header';
import { RouteComponentProps } from 'react-router';
import DiaryDetaiLoader from '../containers/diary/DiaryDetailLoader';

import { media } from '../styles/theme';

export interface DefailtPageProps extends RouteComponentProps<{ id: string }> {}
const DetailPage: React.FC<DefailtPageProps> = ({ match }) => {
    const { id } = match.params;
    console.log(id);
    return (
        <MainTemplate>
            <Header />
            <ContentsContainer>
                <ContentsWrapper>
                    <MainContents>
                        <DiaryDetaiLoader id={id} />
                    </MainContents>
                </ContentsWrapper>
            </ContentsContainer>
        </MainTemplate>
    );
};

const MainTemplate = styled.section`
    width: 100%;
`;

const ContentsContainer = styled.main`
    flex 1 0 auto
`;
const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const MainContents = styled.div`
    position: relative;
    margin: 0 64px;
    min-width: 0;
    width: 100%;
    max-width: ${({ theme }) => theme.width.maxWidth};

    ${media.mobile} {
        margin: 0 14px;
    }
`;

export default DetailPage;
