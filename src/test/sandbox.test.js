import sinon from 'sinon'
import assert from 'assert'

describe('testing sinon', () => {
  let dispatchSpy = sinon.spy()
  dispatchSpy('hello')
  dispatchSpy('world')

  it('calls dispatch', () => {
    const a = dispatchSpy.calledWith('world')
    console.log(a)
  })
})