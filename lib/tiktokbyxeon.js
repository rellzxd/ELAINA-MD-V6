const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/tiktokwm?apikey=380f33983d5719bf2aaa441f&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
	
module.exports = { XeonBotIncTiktok }