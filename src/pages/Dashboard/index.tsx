import React, { useCallback, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://xesque.rocketseat.dev/users/avatar/profile-c3766b96-9200-4a30-a2a8-edad1882e023.jpg"
                alt="Carlos Wimmer"
              />

              <strong>Carlos Wimmer</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePeQRpp_N2fgm3T-T_BehOTcPoCqITIc5dw&usqp=CAU"
                  alt="Renata Francini"
                />

                <strong>Renata Francini</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePeQRpp_N2fgm3T-T_BehOTcPoCqITIc5dw&usqp=CAU"
                  alt="Renata Francini"
                />

                <strong>Renata Francini</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePeQRpp_N2fgm3T-T_BehOTcPoCqITIc5dw&usqp=CAU"
                  alt="Renata Francini"
                />

                <strong>Renata Francini</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePeQRpp_N2fgm3T-T_BehOTcPoCqITIc5dw&usqp=CAU"
                  alt="Renata Francini"
                />

                <strong>Renata Francini</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePeQRpp_N2fgm3T-T_BehOTcPoCqITIc5dw&usqp=CAU"
                  alt="Renata Francini"
                />

                <strong>Renata Francini</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
