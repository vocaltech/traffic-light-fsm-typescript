import { TrafficLightState, next } from '../trafficlight-fsm'


describe('Traffic light tests', () => {
    it('should return GREEN state', () => {
        expect(next(TrafficLightState.RED)).toBe(TrafficLightState.GREEN)
    })  

    it('should return RED state', () => {
        expect(next(TrafficLightState.AMBER)).toBe(TrafficLightState.RED)
    })  

    it('should return AMBER state', () => {
        expect(next(TrafficLightState.GREEN)).toBe(TrafficLightState.AMBER)
    })  
})
