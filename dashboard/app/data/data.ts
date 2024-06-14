import { ServerStatusProp } from "../types/serverStatus";
import {ClientStatusProp} from "../types/clientStatus";

export const clientStatus: ClientStatusProp[] = [
  {
    "id": "2c5946e3-2064-4b3b-b36a-9dc9f8b3d7fd",
    "ip": "192.168.1.1",
    "endpoint":"VULTR-JP-5",
    "country": "US",
    "network": {
    "upload": 8792,
    "download": 17236
    },
    "currentNetworkActivity": {
    "upload": 5523,
    "download": 21439
    },
    "lastHandshake": "2022-10-01T00:00:00.000Z"
  },
  {
    "id": "f7b6744e-49bc-441f-96e2-3c0dd2d3e3b1",
    "ip": "192.168.1.2",
    "endpoint":"VULTR-VN-2",
    "country": "IN",
    "network": {
    "upload": 4251,
    "download": 28934
    },
    "currentNetworkActivity": {
    "upload": 21439,
    "download": 5523
    },
    "lastHandshake": "2022-10-01T00:00:00.000Z"
  },
  {
    "id": "f7b6744e-49bc-441f-96e2-3c0dd2d3e3b1",
    "ip": "192.168.1.3",
    "endpoint":"VULTR-VN-2",
    "country": "CA",
    "network": {
    "upload": 4251,
    "download": 28934
    },
    "currentNetworkActivity": {
    "upload": 21439,
    "download": 5523
    },
    "lastHandshake": "2022-10-01T00:00:00.000Z"
  }]

export const serverStatus: ServerStatusProp[] = [
    {
      "id": "2c5946e3-2064-4b3b-b36a-9dc9f8b3d7fd",
      "label": "Server 1",
      "ip": "192.168.1.1",
      "uptime":3601,
      "cpu": 0.81,
      "memory": 0.24,
      "load": [0.72, 0.45, 0.88],
      "network": {
        "upload": 8792,
        "download": 17236
      },
      "disk": "1TB SSD",
      "currentNetworkActivity": {
        "upload": 5523,
        "download": 21439
      },
      "ping":332
    },
    {
      "id": "f7b6744e-49bc-441f-96e2-3c0dd2d3e3b1",
      "label": "Server 2",
      "ip": "192.168.1.2",
      "uptime": 2345678,
      "cpu": 0.65,
      "memory": 0.27,
      "load": [0.36, 0.67, 0.92],
      "network": {
        "upload": 4251,
        "download": 28934
      },
      "disk": "2TB SSD",
      "currentNetworkActivity": {
        "upload": 21678,
        "download": 31675
      },
      "ping":125
    },
    {
      "id": "6b50deaf-2e2e-41ec-9a48-9a44329e9e46",
      "label": "Server 3",
      "ip": "192.168.1.3",
      "uptime": 3456789,
      "cpu": 0.73,
      "memory": 0.71,
      "load": [0.83, 0.15, 0.71],
      "network": {
        "upload": 13987,
        "download": 7521
      },
      "disk": "500GB SSD",
      "currentNetworkActivity": {
        "upload": 15872,
        "download": 9145
      },
      "ping":64
    },
    {
      "id": "e29b94a9-2546-468a-ba95-f3cd39f7e5d6",
      "label": "Server 4",
      "ip": "192.168.1.4",
      "uptime": 4567890,
      "cpu": 0.89,
      "memory": 0.99,
      "load": [0.58, 0.92, 0.29],
      "network": {
        "upload": 31824,
        "download": 12465
      },
      "disk": "4TB HDD",
      "currentNetworkActivity": {
        "upload": 20763,
        "download": 15784
      },
      "ping":89
    },
    {
      "id": "7d8c20b0-4ac3-418e-8674-987b134b1d70",
      "label": "Server 5",
      "ip": "192.168.1.5",
      "uptime": 5678901,
      "cpu": 0.57,
      "memory": 0.79,
      "load": [0.21, 0.76, 0.63],
      "network": {
        "upload": 29647,
        "download": 18349
      },
      "disk": "1TB SSD",
      "currentNetworkActivity": {
        "upload": 22749,
        "download": 32891
      },
      "ping":764
    },
    {
      "id": "8a3e15bc-6fd1-41c0-9e9b-5b32cfcf2f98",
      "label": "Server 6",
      "ip": "192.168.1.6",
      "uptime": 6789012,
      "cpu": 0.68,
      "memory": 0.35,
      "load": [0.49, 0.28, 0.95],
      "network": {
        "upload": 16235,
        "download": 20673
      },
      "disk": "2TB SSD",
      "currentNetworkActivity": {
        "upload": 18394,
        "download": 20978
      },
      "ping":355
    },
    {
      "id": "1b867047-90f2-4b15-bae7-3d045c11df42",
      "label": "Server 7",
      "ip": "192.168.1.7",
      "uptime": 7890123,
      "cpu": 0.45,
      "memory": 0.91,
      "load": [0.67, 0.34, 0.81],
      "network": {
        "upload": 27894,
        "download": 3216
      },
      "disk": "1TB HDD",
      "currentNetworkActivity": {
        "upload": 19563,
        "download": 5378
      },
      "ping":866
    },
    {
      "id": "f93a4e69-64b6-4431-a3ae-8a90eef2d159",
      "label": "Server 8",
      "ip": "192.168.1.8",
      "uptime": 8901234,
      "cpu": 0.76,
      "memory": 0.58,
      "load": [0.88, 0.52, 0.19],
      "network": {
        "upload": 4287,
        "download": 26938
      },
      "disk": "2TB HDD",
      "currentNetworkActivity": {
        "upload": 26873,
        "download": 13698
      },
      "ping":642
    },
    {
      "id": "24ff1d85-16cf-4329-8a17-1dcb5372a9f4",
      "label": "Server 9",
      "ip": "192.168.1.9",
      "uptime": 9012345,
      "cpu": 0.83,
      "memory": 0.67,
      "load": [0.75, 0.91, 0.42],
      "network": {
        "upload": 17263,
        "download": 13248
      },
      "disk": "500GB SSD",
      "currentNetworkActivity": {
        "upload": 11823,
        "download": 29246
      },
      "ping":98
    },
    {
      "id": "6b3cb8a2-d50b-4463-af78-91c27e491a9e",
      "label": "Server 10",
      "ip": "192.168.1.10",
      "uptime": 1123456,
      "cpu": 0.59,
      "memory": 0.48,
      "load": [0.39, 0.68, 0.56],
      "network": {
        "upload": 29234,
        "download": 16349
      },
      "disk": "1TB SSD",
      "currentNetworkActivity": {
        "upload": 15479,
        "download": 20347
      } ,
      "ping":56 }
]
