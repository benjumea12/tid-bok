import React, { useState, createRef, useEffect } from 'react'
// Resourses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// Styled components
import { MontStyled, YearStyled } from './Selects.styled'

interface IMonthProps {
    options: string[] 
    selected: number
    setMonth: Function
}

interface IYearProps {
    selected: string
    setYear: Function
}

export const SelectMonth = (props: IMonthProps) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const { options, selected, setMonth } = props
    const myRef = createRef<HTMLDivElement>()

    const handleClickInside = () => !openDropdown && setOpenDropdown(true)

    const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
        if (!myRef.current!.contains(event.target as Node)) {
            setOpenDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    const handleSelect = (value: number) => {
        setMonth(value)
        setOpenDropdown(false)
    }

    return(
        <MontStyled ref={myRef} onClick={handleClickInside} openDropdown={openDropdown}>
            <button className='input'> 
                { options[selected] }
                <FontAwesomeIcon icon={faAngleRight} className='icon' />    
            </button> 
            <div className='options'>
                {
                    options.map((option, index) => (
                        <div 
                            className={`option ${ selected === index && `selected` }`} 
                            key={option}
                            onClick={() => handleSelect(index)}
                        >
                            { option }
                        </div>
                    ))
                }
            </div>
            
        </MontStyled>
    )
}

export const SelectYear = (props: IYearProps) => {
    const { selected, setYear } = props
    const [initialYear, seInitialYear] = useState(parseInt(selected))
    const [years, setYears] = useState<number[]>([])

    const [openDropdown, setOpenDropdown] = useState(false);
    const myRef = createRef<HTMLDivElement>()

    const handleClickInside = () => !openDropdown && setOpenDropdown(true)

    const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
        if (!myRef.current!.contains(event.target as Node)) {
            setOpenDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    useEffect(() => {
        let list: number[] = []
        for (let index = initialYear-4; index <= initialYear+4; index++) {
            list.push(index)
        }

        setYears(list)
    }, [initialYear])    

    const handleClick = (value: number) => {
        seInitialYear(value)
    }

    const handleSelect = (value: number) => {
        setYear(value)
        setOpenDropdown(false)
    }

    return(
        <YearStyled ref={myRef} onClick={handleClickInside} openDropdown={openDropdown}>
            <button className='input'>
                { selected }
                <FontAwesomeIcon icon={faAngleRight} className='icon' />    
            </button> 
            <div className='options'>
                <div className='actions'>
                    <FontAwesomeIcon 
                        icon={faAngleRight} 
                        className='left' 
                        onClick={() => handleClick(initialYear-5)}
                    />
                    <FontAwesomeIcon 
                        icon={faAngleRight} 
                        className='right' 
                        onClick={() => handleClick(initialYear+5)}
                    />
                </div>
                {
                    years.map(year => (
                        <div 
                            className={`option ${ parseInt(selected) === year && `selected` }`} 
                            key={year}
                            onClick={() => handleSelect(year)}
                        >
                            { year }
                        </div>
                    ))
                }
            </div>
            
        </YearStyled>
    )
}