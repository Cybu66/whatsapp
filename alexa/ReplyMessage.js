const _0x424b53 = _0x12f8;
(function (_0x20a1f2, _0x35c45d) {
  const _0xb90662 = _0x12f8,
    _0x8a1020 = _0x20a1f2();
  while (!![]) {
    try {
      const _0x47d18c =
        -parseInt(_0xb90662(0xac)) / 0x1 +
        -parseInt(_0xb90662(0xb0)) / 0x2 +
        (-parseInt(_0xb90662(0xae)) / 0x3) *
          (-parseInt(_0xb90662(0x9a)) / 0x4) +
        -parseInt(_0xb90662(0xa7)) / 0x5 +
        -parseInt(_0xb90662(0xa9)) / 0x6 +
        -parseInt(_0xb90662(0xb4)) / 0x7 +
        parseInt(_0xb90662(0x93)) / 0x8;
      if (_0x47d18c === _0x35c45d) break;
      else _0x8a1020["push"](_0x8a1020["shift"]());
    } catch (_0x42fc92) {
      _0x8a1020["push"](_0x8a1020["shift"]());
    }
  }
})(_0x4251, 0xd82de);
const { MessageType, Presence, MessageOptions } = require(_0x424b53(0x8c)),
  Base = require(_0x424b53(0x9e)),
  Image = require(_0x424b53(0xa6));
class ReplyMessage extends Base {
  constructor(_0xad420c, _0x3b0a49) {
    const _0x4c941f = _0x424b53;
    super(_0xad420c);
    if (_0x3b0a49) this[_0x4c941f(0x8f)](_0x3b0a49);
  }
  [_0x424b53(0x8f)](_0x1e0a36) {
    const _0x56bfcf = _0x424b53;
    (this["id"] = _0x1e0a36[_0x56bfcf(0x97)]),
      (this[_0x56bfcf(0xb3)] = _0x1e0a36["participant"]);
    if (
      _0x1e0a36[_0x56bfcf(0xa1)] &&
      _0x1e0a36["quotedMessage"][_0x56bfcf(0xa2)]
    )
      (this[_0x56bfcf(0xa3)] =
        _0x1e0a36[_0x56bfcf(0xa1)]["imageMessage"][_0x56bfcf(0xb1)] === null
          ? _0x1e0a36[_0x56bfcf(0xa3)][_0x56bfcf(0xa2)][_0x56bfcf(0xb1)]
          : ""),
        (this[_0x56bfcf(0xb1)] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xa2)][_0x56bfcf(0xb1)] === null
            ? _0x1e0a36[_0x56bfcf(0xa3)][_0x56bfcf(0xa2)][_0x56bfcf(0xb1)]
            : ""),
        (this[_0x56bfcf(0x9c)] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xa2)]["url"]),
        (this["mimetype"] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xa2)][_0x56bfcf(0xa4)]),
        (this[_0x56bfcf(0xb5)] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xa2)][_0x56bfcf(0xb5)]),
        (this[_0x56bfcf(0x91)] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xa2)]["width"]),
        (this["mediaKey"] =
          _0x1e0a36[_0x56bfcf(0xa1)]["imageMessage"][_0x56bfcf(0x94)]),
        (this[_0x56bfcf(0x99)] = !![]),
        (this["video"] = ![]);
    else {
      if (
        _0x1e0a36[_0x56bfcf(0xa1)] &&
        _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)]
      )
        (this[_0x56bfcf(0xa3)] =
          _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)][_0x56bfcf(0xb1)] === null
            ? _0x1e0a36[_0x56bfcf(0xa3)][_0x56bfcf(0xaa)][_0x56bfcf(0xb1)]
            : ""),
          (this["caption"] =
            _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)][_0x56bfcf(0xb1)] ===
            null
              ? _0x1e0a36[_0x56bfcf(0xa3)]["videoMessage"]["caption"]
              : ""),
          (this[_0x56bfcf(0x9c)] =
            _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)][_0x56bfcf(0x9c)]),
          (this["mimetype"] =
            _0x1e0a36["quotedMessage"][_0x56bfcf(0xaa)][_0x56bfcf(0xa4)]),
          (this[_0x56bfcf(0xb5)] =
            _0x1e0a36[_0x56bfcf(0xa1)]["videoMessage"][_0x56bfcf(0xb5)]),
          (this[_0x56bfcf(0x91)] =
            _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)][_0x56bfcf(0x91)]),
          (this[_0x56bfcf(0x94)] =
            _0x1e0a36[_0x56bfcf(0xa1)][_0x56bfcf(0xaa)][_0x56bfcf(0x94)]),
          (this[_0x56bfcf(0xa0)] = !![]);
      else
        _0x1e0a36[_0x56bfcf(0xa1)] &&
          _0x1e0a36["quotedMessage"]["conversation"] &&
          ((this[_0x56bfcf(0xa3)] =
            _0x1e0a36["quotedMessage"][_0x56bfcf(0x98)]),
          (this[_0x56bfcf(0x8a)] = _0x1e0a36[_0x56bfcf(0xa1)]["conversation"]),
          (this["image"] = ![]),
          (this[_0x56bfcf(0xa0)] = ![]));
    }
    return (this["data"] = _0x1e0a36), super[_0x56bfcf(0x8f)](_0x1e0a36);
  }
  async [_0x424b53(0x9d)]() {
    const _0x4c1ae2 = _0x424b53;
    return await this[_0x4c1ae2(0x8d)][_0x4c1ae2(0xab)](this[_0x4c1ae2(0xb3)], {
      id: this["id"],
      remoteJid: this[_0x4c1ae2(0xb3)],
      fromMe: !![],
    });
  }
  async [_0x424b53(0xb2)](_0x356d53) {
    const _0xd586e3 = _0x424b53;
    var _0x3164a5 = await this[_0xd586e3(0x8d)][_0xd586e3(0x8b)](
      this[_0xd586e3(0xb3)],
      _0x356d53,
      MessageType[_0xd586e3(0x8a)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xd586e3(0xa5)],
      }
    );
    return new Message(this[_0xd586e3(0x8d)], _0x3164a5);
  }
  async ["sendMessage"](_0x3da154, _0x2c2960, _0x1e0be9) {
    const _0x27b78a = _0x424b53;
    return await this[_0x27b78a(0x8d)][_0x27b78a(0x8b)](
      this[_0x27b78a(0xb3)],
      _0x3da154,
      _0x2c2960,
      _0x1e0be9
    );
  }
  async [_0x424b53(0x8e)]() {
    const _0x2274b1 = _0x424b53;
    return await this["client"]["updatePresence"](
      this[_0x2274b1(0xb3)],
      Presence[_0x2274b1(0x9b)]
    );
  }
  async [_0x424b53(0x95)]() {
    const _0x3910eb = _0x424b53;
    return await this["client"][_0x3910eb(0x92)](
      this[_0x3910eb(0xb3)],
      Presence["recording"]
    );
  }
  async [_0x424b53(0xaf)]() {
    const _0x15f22a = _0x424b53;
    return await this["client"][_0x15f22a(0x92)](
      this[_0x15f22a(0xb3)],
      Presence[_0x15f22a(0x90)]
    );
  }
  async [_0x424b53(0xad)]() {
    const _0xd78991 = _0x424b53;
    return await this[_0xd78991(0x8d)][_0xd78991(0x92)](
      this[_0xd78991(0xb3)],
      Presence["unavailable"]
    );
  }
  async [_0x424b53(0xa8)](_0x170466 = this["id"]) {
    const _0x4768d2 = _0x424b53;
    return this[_0x4768d2(0x99)]
      ? (await this["client"][_0x4768d2(0x9f)](
          this[_0x4768d2(0xa5)]["quotedMessage"]["imageMessage"],
          _0x170466
        ),
        this["id"] + "." + this[_0x4768d2(0xa4)][_0x4768d2(0x96)]("/")[0x1])
      : ![];
  }
}
function _0x4251() {
  const _0x3f4109 = [
    "275241yAknOF",
    "sendOffline",
    "174PouXkC",
    "sendOnline",
    "2850670OsygfP",
    "caption",
    "sendReply",
    "jid",
    "492520lTbYUE",
    "height",
    "text",
    "sendMessage",
    "@adiwajshing/baileys",
    "client",
    "sendTyping",
    "_patch",
    "available",
    "width",
    "updatePresence",
    "23075992cjLuMd",
    "mediaKey",
    "sendRecording",
    "split",
    "stanzaId",
    "conversation",
    "image",
    "40844opGYsD",
    "composing",
    "url",
    "delete",
    "./Base",
    "downloadAndSaveMediaMessage",
    "video",
    "quotedMessage",
    "imageMessage",
    "message",
    "mimetype",
    "data",
    "./Image",
    "4081185XcrHpe",
    "download",
    "24564UWRsMg",
    "videoMessage",
    "deleteMessage",
  ];
  _0x4251 = function () {
    return _0x3f4109;
  };
  return _0x4251();
}
function _0x12f8(_0x5adeda, _0x56faab) {
  const _0x425127 = _0x4251();
  return (
    (_0x12f8 = function (_0x12f8dc, _0x36bb08) {
      _0x12f8dc = _0x12f8dc - 0x8a;
      let _0x377342 = _0x425127[_0x12f8dc];
      return _0x377342;
    }),
    _0x12f8(_0x5adeda, _0x56faab)
  );
}
module["exports"] = ReplyMessage;
