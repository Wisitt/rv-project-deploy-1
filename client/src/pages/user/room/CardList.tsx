import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/joy';
import { styled } from '@mui/system';
import { SearchRoomParams } from '../../../auth/service/RoomService';

const StyledCard = styled(Card)`
  width: 250px;
  height: 280px;
  backdrop-filter: blur(0px);  
  transition: all 0.3s;
  background-color: rgba(24, 43, 60, 0.089);
  background-color: ${({ theme }) => theme.palette.background.backdrop};

  &::before,
  &::after {
    width: 100%;
    height: 50%;
    position: absolute;
    content: '';
    z-index: -20;
    transition: all 0.3s;

    &::before {
      top: 0;
      right: 0;
    }

    &::after {
      bottom: 0;
      left: 0;
    }
  }

  &:hover {
    &::before {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transform: translate(90px, -105px);
      background-color: #AA96DA;
    }
    
    &::after {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transform: translate(-90px, 60px);
      background-color: #AA96DA;
    }
    
    .content-card-user {
      color: #a6bfd3;
    }
  }
`;

const StyledCardContent = styled(CardContent)`
  width: 100%;
  height: 100%;
  background-color: rgba(24, 43, 60, 0.089);
  backdrop-filter: blur(50px);
  border: 0.5px solid #fff;
  border-radius: 6px;
  box-shadow: 0 0 30px rgb(4 19 33 / 31%);
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type CardListProps = {
  data: SearchRoomParams[];
  isRecommended: boolean;
  onConfirmClick: (roomId: string, roomNumber: string) => void;
  onReportClick: (roomId: string, roomNumber: string) => void;
};

const CardList: React.FC<CardListProps> = ({ data, isRecommended, onConfirmClick, onReportClick }) => {
  return (
    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      {data.map((item, index) => (
        <StyledCard key={item.room_id || index} className="card-user" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <StyledCardContent className="content-card-user">
            {isRecommended && (
              <Typography variant="outlined" color="success" sx={{ width: '80%', borderRadius: '10px', display: 'flex' }}>
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Sparkles.webp"
                  alt="Sparkles"
                  width="25"
                  height="25"
                />
                Recommended
              </Typography>
            )}
            <Typography>ชั้น : {item.room_level}</Typography>
            <Typography>รูปแบบห้อง : {item.room_type}</Typography>
            <Typography>ห้อง : {item.room_number}</Typography>
          </StyledCardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              onClick={() => onConfirmClick(item.room_id, item.room_number)}
              sx={{ borderRadius: '20px' }}
              variant="outlined"
            >
              Confirm
            </Button>
            <Button
              color="danger"
              onClick={() => onReportClick(item.room_id, item.room_number)}
              sx={{ borderRadius: '20px' }}
              variant="outlined"
            >
              {'Report'}
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </Grid>
  );
};

export default CardList;
