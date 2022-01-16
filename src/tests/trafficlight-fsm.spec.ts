import { TrafficLightState, TrafficLightEvent, Payload, next1, next2 } from '../trafficlight-fsm'


describe('Traffic light tests with next1', () => {
    it(' should return GREEN state', () => {
        expect(next1(TrafficLightState.RED)).toBe(TrafficLightState.GREEN)
    })  

    it(' should return RED state', () => {
        expect(next1(TrafficLightState.AMBER)).toBe(TrafficLightState.RED)
    })  

    it(' should return AMBER state', () => {
        expect(next1(TrafficLightState.GREEN)).toBe(TrafficLightState.AMBER)
    })  
})

describe('Traffic light tests with next2', () => {
    it(' should return RED state before timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.RED
        }

        expect(next2(payload)).toBe(TrafficLightState.RED)
    })

    it(' should return GREEN state after timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.RED,
            event: TrafficLightEvent.TIMER_EXPIRES
        }

        expect(next2(payload)).toBe(TrafficLightState.GREEN)
    })

    it(' should return AMBER state before timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.AMBER
        }

        expect(next2(payload)).toBe(TrafficLightState.AMBER)
    })

    it(' should return RED state after timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.AMBER,
            event: TrafficLightEvent.TIMER_EXPIRES
        }

        expect(next2(payload)).toBe(TrafficLightState.RED)
    })

    it(' should return GREEN state before timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.GREEN
        }

        expect(next2(payload)).toBe(TrafficLightState.GREEN)
    })

    it(' should return AMBER state after timer_expires', () => {
        const payload: Payload = {
            state: TrafficLightState.GREEN,
            event: TrafficLightEvent.TIMER_EXPIRES
        }

        expect(next2(payload)).toBe(TrafficLightState.AMBER)
    })
})

