import Typography from '@/components/common/Typography';
import * as S from './Header.styles';

function Header() {
  return (
    <S.Container>
      <S.Circle />
      <Typography size={15} weight="bold">
        2025-05-16
      </Typography>
    </S.Container>
  );
}

export default Header;
