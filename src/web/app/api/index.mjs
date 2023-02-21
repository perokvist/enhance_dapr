import { DaprClient } from "@dapr/dapr";

const daprHost = "127.0.0.1"; // Dapr Sidecar Host
const daprPort = "3500"; // Dapr Sidecar Port of this Example Server
const serviceStoreName = "statestore";

const client = new DaprClient(daprHost, daprPort);

export async function get (req) {
  console.log(req)

  // Save State
  const _ = await client.state.save(serviceStoreName, [
    {
      key: "first-key-name",
      value: "hello",
    },
    {
      key: "second-key-name",
      value: "world",
    },
  ]);


  // Get State
  const response = await client.state.get(serviceStoreName, "first-key-name");

  return {
    json: [response]
  }
}