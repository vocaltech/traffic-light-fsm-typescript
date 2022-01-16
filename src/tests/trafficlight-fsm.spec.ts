import { TrafficLightState, TrafficLightEvent, Payload, next1, next2, TrafficLightFsmMap } from '../trafficlight-fsm'


describe.skip('Traffic light tests with next1', () => {
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

describe.skip('Traffic light tests with next2', () => {
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

describe('TrafficLightFsmMap tests', () => {
    it(' should return RED state before timer_expires', () => {
        expect(TrafficLightFsmMap.states.RED.WAIT).toBe(TrafficLightState.RED)
    })
    
    it(' should return GREEN state after timer_expires', () => {
        expect(TrafficLightFsmMap.states.RED.TIMER_EXPIRES).toBe(TrafficLightState.GREEN)
    })

    it(' should return AMBER before timer_expires', () => {
        expect(TrafficLightFsmMap.states.AMBER.WAIT).toBe(TrafficLightState.AMBER)
    })

    it(' should return RED after timer_expires', () => {
        expect(TrafficLightFsmMap.states.AMBER.TIMER_EXPIRES).toBe(TrafficLightState.RED)
    })

    it(' should return GREEN before timer_expires', () => {
        expect(TrafficLightFsmMap.states.GREEN.WAIT).toBe(TrafficLightState.GREEN)
    })

    it(' should return AMBER after timer_expires', () => {
        expect(TrafficLightFsmMap.states.GREEN.TIMER_EXPIRES).toBe(TrafficLightState.AMBER)
    })
})


