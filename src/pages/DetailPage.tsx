import styled from 'styled-components';
import Header from '../components/header';
import { RouteComponentProps } from 'react-router';

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
                        글일긱 상세 화면! 너는 일기를 쓴다!
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
    margin: 0 64px;
    min-width: 0;
    width: 100%;
    max-width: ${({ theme }) => theme.width.maxWidth};
`;

export default DetailPage;
