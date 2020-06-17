import moment from 'moment'
import filetrsReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filetrsReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filetrsReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to Date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filetrsReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text Filter', () => {
    const text = 'bill'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filetrsReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startDate Filter', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filetrsReducer(undefined, action)
    expect(state.startDate).toBe(startDate)
})

test('should set endDate Filter', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filetrsReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})