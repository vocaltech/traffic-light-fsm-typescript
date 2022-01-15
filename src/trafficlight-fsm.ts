// enum which represents the valid states
export enum TrafficLightState {
    RED = 'RED',
    AMBER = 'AMBER',
    GREEN = 'GREEN'
}

// enum which represents the triggers/transition events
export enum TrafficLightEvent {
    TIMER_EXPIRES = 'TIMER_EXPIRES'
}

export const next = (state: TrafficLightState): TrafficLightState => {
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

export const TrafficLightFsm = {
    initialState: TrafficLightState.RED,
    states: {
        [TrafficLightState.RED]: TrafficLightState.GREEN,
        [TrafficLightState.AMBER]: TrafficLightState.RED,
        [TrafficLightState.GREEN]: TrafficLightState.AMBER
    }
}