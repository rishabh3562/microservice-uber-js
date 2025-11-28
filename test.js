// test.js
const autocannon = require("autocannon");

function runLoadTest() {
    const instance = autocannon({
        url: "http://localhost:3000",
        duration: 30,        // 30 seconds
        connections: 100,    // concurrent clients
        pipelining: 1
    });

    instance.on("start", () => {
        console.log("Load test started...");
    });

    instance.on("done", (result) => {
        console.log("\nLoad test completed.");
        console.log("----- Summary -----");
        console.log(`Requests/sec      : ${result.requests.average}`);
        console.log(`Latency (ms)      : ${result.latency.average}`);
        console.log(`Throughput (MB/s) : ${(result.throughput.average / (1024 * 1024)).toFixed(2)}`);
    });

    autocannon.track(instance, { renderProgressBar: true });
}

runLoadTest();
