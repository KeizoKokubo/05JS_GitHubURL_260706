import re
import os

game_path = r"c:\Users\student\Desktop\小久保先生 授業\Webオンライン\RussianRoulette\game.js"
with open(game_path, 'r', encoding='utf-8') as f:
    game_content = f.read()

replacements = [
    (r"// Game State", "// ゲームの状態管理（Game State）"),
    (r"// DOM Elements", "// DOM要素の取得（DOM Elements）"),
    (r"// Initialize Application", "// アプリケーションの初期化処理"),
    (r"// Mode Selection", "// モード選択処理（PvE / PvP）"),
    (r"// Difficulty Selection", "// 難易度選択処理（EASY / NORMAL / HARD）"),
    (r"// Start Game Setup", "// ゲーム開始のセットアップ処理"),
    (r"// Reload cylinder with random bullets", "// シリンダーにランダムな弾（実弾・空砲）を装填する処理"),
    (r"// Update UI Panels based on Turn", "// ターンに基づいてUIパネルを更新する処理"),
    (r"// Core Actions", "// コアアクション（発砲・アイテム使用など）"),
    (r"// Handle Player Shooting", "// プレイヤーの発砲処理を制御"),
    (r"// Item Usage", "// アイテム使用処理"),
    (r"// Turn Management", "// ターン管理処理"),
    (r"// Dealer \(AI\) Turn Logic", "// ディーラー（AI）のターン思考・行動ロジック"),
    (r"// End Game & History", "// ゲーム終了処理と履歴保存")
]

for old, new in replacements:
    game_content = re.sub(old, new, game_content)

with open(game_path, 'w', encoding='utf-8') as f:
    f.write(game_content)

sound_path = r"c:\Users\student\Desktop\小久保先生 授業\Webオンライン\RussianRoulette\sound.js"
with open(sound_path, 'r', encoding='utf-8') as f:
    sound_content = f.read()

sound_replacements = [
    (r"Initialize AudioContext. Must be triggered by user interaction.", "AudioContextの初期化。ユーザーアクションによってトリガーされる必要があります。"),
    (r"Toggle mute state", "ミュート（消音）状態の切り替え"),
    (r"Create a buffer filled with white noise", "ホワイトノイズで満たされたバッファを作成（発砲音などの基礎）"),
    (r"Live shot sound \(Explosive gunfire\)", "実弾の発砲音（爆発的な銃声）"),
    (r"Blank shot sound \(Click\)", "空砲の音（カチッという引き金の音）"),
    (r"Reload sound", "リロード（弾込め）の音"),
    (r"Item usage sounds", "アイテム使用時の音"),
    (r"Heartbeat sound effect", "心音（ハートビート）の効果音。緊張感を高める"),
    (r"Cyber UI Click", "サイバー風のUIクリック音")
]

for old, new in sound_replacements:
    sound_content = re.sub(old, new, sound_content)

with open(sound_path, 'w', encoding='utf-8') as f:
    f.write(sound_content)

print("Comments updated successfully.")
