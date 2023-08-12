'use client'

import * as React from "react"
import Script from 'next/script'

const url = "https://ipinfo.io?callback"
export default function Ip() {
    // get ip
    const [ip, setIp] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((j) => setIp(j.ip));
    }, []);
    // get city
    const [city, setCity] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((j) => setCity(j.city));
    }, []);
    // get region
    const [region, setRegion] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((j) => setRegion(j.region));
    }, []);
    // get hostname
    const [hostname, setHostname] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((j) => setHostname(j.hostname));
    }, []);
    // get org
    const [org, setOrg] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((j) => setOrg(j.org));
    }, []);
    return (
        <div>
            <main>
                <div></div>
                <div>
                    <div id="ip"><h1>Your Global IP: {ip}</h1></div>
                    <div id="ip"><h1>Your Region: {region}</h1></div>
                    <div id="ip"><h1>Your City: {city}</h1></div>
                    <div id="ip"><h1>Your Hostname: {hostname}</h1></div>
                    <div id="ip"><h1>Your Provider: {org}</h1></div>
                </div>
                <div id="information"></div>
            </main>
            <Script src="/js/info.js" strategy="afterInteractive"/>
        </div>
    )
}