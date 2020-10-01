import React, { useState } from 'react'
import moment from 'moment'
// Resourses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faMedal } from '@fortawesome/free-solid-svg-icons'
// My components
import { Typography, Divider, Button } from '../index'
import { SelectMonth, SelectYear } from './Selects'
// Styled components
import { Container, Actions, CalendarCard, SryledTimeWidget } from './Calendar.styled'

export interface ITime {
    date: {year: number, month: string, day: number}
    route: string
    bestTime: string
    type: string
}

export interface ITimeWidget {
    time: ITime
}

// Moment
const weekdayshort = moment.weekdaysShort()
const times: Array<ITime> = [   {date: {year: 2000, month: 'Sep', day: 1}, route: 'La oriental', bestTime: '20:04:14', type: 'I'},
                                {date: {year: 2000, month: 'Sep', day: 11}, route: 'La oriental', bestTime: '20:04:14', type: 'G'},
                                {date: {year: 2000, month: 'Sep', day: 11}, route: 'La oriental', bestTime: '20:04:14', type: 'I'},
                                {date: {year: 2000, month: 'Aug', day: 28}, route: 'La oriental', bestTime: '20:04:14', type: 'G'}]

const TimeWidget = (props: ITimeWidget) => {
    const { time } = props
    const [open, setOpen] = useState(false)

    return (
        <SryledTimeWidget type={time.type} open={open}  onMouseLeave={() => setOpen(false)} >
                <div className='time' onMouseOver={() => setOpen(true)}></div>
                <div className='card'>
                    <p className='route'>Marsella - la oriental</p>
                    <Typography
                        variant='h5' 
                        bg='white'
                    >
                        <React.Fragment>
                            <FontAwesomeIcon icon={faMedal} size='sm' /> <b>23:12:05</b>
                        </React.Fragment>
                    </Typography>
                    <Divider marginT='5px' marginB='8px' marginL='10%' width='80%' />
                    <Button variant='link' text='Ver' />
                </div>
        </SryledTimeWidget>
    )
}


interface ICalendar {
    children?: JSX.Element
}

const Calendar = (props: ICalendar) => {
    // Date objectt moment
    const [dateObject, setDataObject] = useState(moment())

    // Current date
    const currentDate  = { 
        day: dateObject.format("D"),
        month: dateObject.format("MMMM"),
        year: dateObject.format("Y")
    }  

    // For the calendar card
        // Day the month begins
    const firstDay = parseInt(moment(dateObject).startOf("month").format("d"))
    // Days of the month
    const daysMonth = dateObject.daysInMonth()

    // For the date selects
    const months = moment.monthsShort()
    const [selectedMonth, setSelectedMonth] = useState<number>(months.indexOf(dateObject.format("MMM")))
    

    const setMonth = (month: number) => {
        const newDateObject = moment(dateObject).set("month", month)
        setSelectedMonth(month)
        setDataObject(newDateObject)
    }

    const setYear = (year: number) => {
        const newDateObject = moment(dateObject).set("year", year)
        setDataObject(newDateObject)
    }

    const setMontYear = (month: number, year: number) => {
        const newDateObject = moment(dateObject).set("year", year).set("month", month)
        setSelectedMonth(month)
        setDataObject(newDateObject)
    }

    const prevMounth = () => {
        if(selectedMonth-1 <= 0){
            setMontYear(11, parseInt(currentDate.year)-1)
        } else {
            setMonth(selectedMonth-1)
        }
    }

    const nextMounth = () => {
        if(selectedMonth+1 >= 12){
            setMontYear(0, parseInt(currentDate.year)+1)
        }else {
            setMonth(selectedMonth+1)
        }
    }



    // *******************************************

    let blanks = []
    for (let i = 0; i < firstDay; i++) {
      blanks.push(
        <td key={`not-day-${i}`} className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= daysMonth; d++) {
        const timesOfDay = times.filter(time => time.date.day === d)

        daysInMonth.push(
            <td key={`day-${d}`} className="calendar-day">
                <p>{d}</p>
                <div className='times'>
                    {
                        timesOfDay.map((time, index) => (
                            <TimeWidget key={index} time={time}/>
                        ))
                    }
                </div>
            </td>
        );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows: Object[] = []
    let cells: Object[] = []   
    
    totalSlots.forEach((row, i) => {
        if (i !== 0 && i % 7 === 0) {
            rows.push(cells);
            cells = []; 
            cells.push(row);
        } else {
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    })
    

    return (
        <Container>
            <Actions>
                <Typography className='current-date' variant='h2' bg='secondary'>
                    <React.Fragment>{ currentDate.month } { currentDate.year }</React.Fragment>
                </Typography>
                <div className='container-actions'>
                    <div className='selects'>
                        <SelectMonth
                            options={months}
                            selected={selectedMonth} 
                            setMonth={(month: number) => setMonth(month)}
                        />
                        <SelectYear 
                            selected={currentDate.year}
                            setYear={(year: number) => setYear(year)}
                        />
                    </div>
                    <div className='prev-next'>
                        <div onClick={prevMounth}>
                            <FontAwesomeIcon 
                                icon={faAngleRight} 
                                className='left' 
                                size='2x' 
                            />
                        </div>
                        <div onClick={nextMounth}>
                            <FontAwesomeIcon 
                                icon={faAngleRight} 
                                size='2x'
                            />
                        </div>
                    </div>
                </div>
                <Divider marginT='20px' marginB='20px'/>
                { props.children }
            </Actions>
            <CalendarCard>
                <Typography variant='h3' bg='primary'>Calendario de tiempos</Typography>
                <table className='table'>
                    <thead>
                        <tr>
                            { weekdayshort.map(day => (
                                <th key={day}>{ day }</th>
                            )) }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((d, index) => {

                                return ( 
                                    <tr key={`week-${index}`}>
                                    {d}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </CalendarCard>
        </Container>
    )
}

export default Calendar