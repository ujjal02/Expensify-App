import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
    const uid = 'qwert123'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate login action object', () => {
    const action = login()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})