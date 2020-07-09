import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={230}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={25000000}/>)
    expect(wrapper).toMatchSnapshot()
})
