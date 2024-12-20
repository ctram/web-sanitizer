"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LLM_apiKey, _LLM_model, _LLM_baseUrl;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLM = void 0;
class LLM {
    constructor(apiKey, model, baseUrl) {
        _LLM_apiKey.set(this, void 0);
        _LLM_model.set(this, void 0);
        _LLM_baseUrl.set(this, void 0);
        __classPrivateFieldSet(this, _LLM_apiKey, apiKey, "f");
        __classPrivateFieldSet(this, _LLM_model, model, "f");
        __classPrivateFieldSet(this, _LLM_baseUrl, baseUrl, "f");
    }
    async generateText(prompt, maxTokens = 100) {
        // Implementation for text generation
        // This would typically involve making an API call to the LLM service
        return "Generated text based on prompt";
    }
    setModel(model) {
        __classPrivateFieldSet(this, _LLM_model, model, "f");
    }
    getModel() {
        return __classPrivateFieldGet(this, _LLM_model, "f");
    }
}
exports.LLM = LLM;
_LLM_apiKey = new WeakMap(), _LLM_model = new WeakMap(), _LLM_baseUrl = new WeakMap();
//# sourceMappingURL=llm.js.map