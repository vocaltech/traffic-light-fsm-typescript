// enum which represents the valid states
export enum TrafficLightState {
    RED = 'RED',
    AMBER = 'AMBER',
    GREEN = 'GREEN'
}

// enum which represents the triggers/transition events
export enum TrafficLightEvent {
    WAIT = 'WAIT',
    TIMER_EXPIRES = 'TIMER_EXPIRES'
}

export type Payload = {
    state: TrafficLightState,
    event?: TrafficLightEvent
}

export const next1 = (state: TrafficLightState): TrafficLightState => {
    switch(state) {
        case TrafficLightState.RED: 
            return TrafficLightState.GREEN

        case TrafficLightState.AMBER:
            return TrafficLightState.RED

        case TrafficLightState.GREEN:
            return TrafficLightState.AMBER

        default: return TrafficLightState.RED
    }
}

export const next2 = (payload: Payload): TrafficLightState => {
    switch(payload.state) {
        case TrafficLightState.RED: 
            return (payload.event === TrafficLightEvent.TIMER_EXPIRES ? TrafficLightState.GREEN: TrafficLightState.RED)

        case TrafficLightState.AMBER:
            return (payload.event === TrafficLightEvent.TIMER_EXPIRES ? TrafficLightState.RED: TrafficLightState.AMBER)

        case TrafficLightState.GREEN:
            return (payload.event === TrafficLightEvent.TIMER_EXPIRES ? TrafficLightState.AMBER: TrafficLightState.GREEN)

        default: return TrafficLightState.RED
    }
}

export const TrafficLightFsmMap = {
    initialState: TrafficLightState.RED,
    states: {
        [TrafficLightState.RED]: {
            [TrafficLightEvent.WAIT]: TrafficLightState.RED,
            [TrafficLightEvent.TIMER_EXPIRES]: TrafficLightState.GREEN
        },
        [TrafficLightState.AMBER]: {
            [TrafficLightEvent.WAIT]: TrafficLightState.AMBER,
            [TrafficLightEvent.TIMER_EXPIRES]: TrafficLightState.RED
        },
        [TrafficLightState.GREEN]: {
            [TrafficLightEvent.WAIT]: TrafficLightState.GREEN,
            [TrafficLightEvent.TIMER_EXPIRES]: TrafficLightState.AMBER
        }
    }
}

