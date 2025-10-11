declare module 'trystero/torrent' {
  import {BaseRoomConfig, RelayConfig, Room} from 'trystero'

  export function joinRoom(
    config: BaseRoomConfig & RelayConfig,
    roomId: string
  ): Room

  export function getRelaySockets(): Record<string, WebSocket>
  export function pauseRelayReconnection(): void
  export function resumeRelayReconnection(): void

  export * from 'trystero'
}
